interface RecipeMinified {
    id: number
    author?: string
    title: string
}

interface UserMinified {
    author: string
    id: number
}

export interface User {
    recipes: RecipeMinified[]
    fullName: string
    email: SVGAnimatedString
    id: number
    subscriptions: UserMinified[]
    subscribers: UserMinified[]
}

export interface SystemState {
    user: User
    recipes: RecipeMinified[]
    token: string
}