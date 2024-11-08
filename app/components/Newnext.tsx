//* The use client text should be used inorder to tell `NEXT` to render it on client side.
"use client";

function Newnext() {
    console.log("I am Client Now");
    /* The console log is shown in both server and client console because in `NEXT` because even "client components" are partially rendered as "server components"  */
    return (
        <>
            <h1 className="text-5xl">Good morning</h1>
        </>
    );
}
export default Newnext;
