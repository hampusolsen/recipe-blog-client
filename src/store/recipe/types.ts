export interface Comment {
    author: {
        fullName: string
        id: number
    }
    content: string
    votes: {
        negative: number
        positive: number
    }
}