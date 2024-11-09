import Link from "next/link";

export default function page() {
    return (
        <>
            <div className="flex flex-col flex-nowrap w-screen text-center my-7 gap-[3rem] items-center">
                <h1 className="text-4xl ">Users Page</h1>
                <ul className="list-next w-[85%]">
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
            </div>
        </>
    );
}
