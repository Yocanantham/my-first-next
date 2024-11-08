import Link from "next/link";

export default function page() {
    return (
        <>
            <h1>Users Page</h1>
            <ul>
                <li>
                    <Link href="/dashboard/users/A">UserA</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/B">UserB</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/C">UserC</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/D">UserD</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/E">UserE</Link>
                </li>
            </ul>
        </>
    );
}
