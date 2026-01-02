import { NewProjectWizard } from "@/components/projects/NewProjectWizard";

export default function NewProjectPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 selection:bg-blue-500/30">
            <NewProjectWizard />
        </main>
    );
}
