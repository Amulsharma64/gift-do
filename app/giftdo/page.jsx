import McqContainer from "../../components/mcq/McqContainer";


export const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <h1 className="text-4xl font-bold mb-5">Gift Dona</h1>
            <McqContainer/>
        </main>
    );
}

export default page