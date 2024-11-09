export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 className="text-5xl text-center">NAVBAR</h1>
            {children}
        </div>
    );
}
