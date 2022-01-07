import fs from 'fs';
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

export const getFiles = (dir) => {
    return fs.readdirSync(path.join(root, 'data', dir))
}

export const getFileBySlug = async (dir, slug) => {
    
    const mdxSource = fs.readFileSync(path.join(root, 'data', dir, `${slug}.mdx`), 'utf-8')

    const {data, content} = await matter(mdxSource)
    const source = await serialize(content)
    
    return {
        source,
        frontmatter: {
            slug,
            ...data
        }
    }
}

export const getAllFilesMetadata = (dir) => {

    const files = getFiles(dir)

    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, 'data', dir, postSlug), 'utf-8')
        const {data} = matter(mdxSource)

        return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPosts]
    }, [])
}