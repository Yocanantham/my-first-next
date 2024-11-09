export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 className="text-5xl uppercase text-center">ROOT</h1>
            {children}
        </div>
    );
}
