import Link from "next/link";
import Newnext from "./components/Newnext";
export default function Home() {
    console.log("Am I Client or Server Now");
    // # Since no client in mentioned above as "use client" the log will be displayed only on server in `NEXT`
    return (
        <>
            <Newnext />
            <div>My first next learning</div>
            <div>
                <ul>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/analytics">Analytics</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/users">Users</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
