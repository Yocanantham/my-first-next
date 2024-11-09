import Link from "next/link";
import Newnext from "../components/Newnext";
import Image from "next/image";
export default function Home() {
    console.log("Am I Client or Server Now");
    // # Since no client in mentioned above as "use client" the log will be displayed only on server in `NEXT`
    return (
        <>
            <div className="flex flex-col flex-nowrap w-full justify-center items-center text-center gap-14 my-48">
                <Newnext />
                <div className="flex flex-nowrap gap-3 justify-center items-center text-center">
                    <h1 className="text-3xl">My first next learning in </h1>
                    <Image
                        src="/next.svg"
                        alt="NEXT"
                        width={115}
                        height={45}
                        className="checking"
                        // style={{ filter: "brightness(0) invert(1)" }}
                    />
                </div>
            </div>
            <div className="w-full">
                <ul className="list-next">
                    <li>
                        <Link href="/dashboard/home">Home</Link>
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
