import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

    return (
        <section className="App">
            <TwitterFollowCard isFollowing={false}>
                Anthony Aguilar
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev" isFollowing>
                Isaias Aguilar
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev" isFollowing={false}>
                Nemesis Ysturdev
            </TwitterFollowCard>

        </section>
    )
}

