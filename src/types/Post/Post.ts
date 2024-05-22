import { ReactNode } from "react";

export interface PostAction {
    IconImage: ReactNode,
    onClickAction: () => void
}

export interface Post {
    description: string,
    imageURL: string,
    userName: string,
}