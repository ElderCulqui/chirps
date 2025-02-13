import { useForm } from "@inertiajs/react";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function ChirpForm({ className, chirp, setEditing}) {
    const form = useForm({
        message: chirp?.message,
    })

    function handleSubmit(e) {
        e.preventDefault();

        if (chirp?.id) {
            form.patch(route('chirps.update', chirp.id), {
                onSuccess: () => form.reset(),
                preserveState: false,
            })
            return ;
        }

        form.post(route('chirps.store'), {
            onSuccess: () => form.reset(),
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={className}
        >
            <textarea
                placeholder="What's on your mind?"
                className="block w-full transition-colors duration-300 bg-white border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-300 dark:focus:ring dark:focus:ring-blue-200 dark:focus:ring-opacity-50"
                value={form.data.message}
                onChange={(e) => form.setData('message', e.target.value)}
            ></textarea>
            <InputError message={form.errors.message} />
            <PrimaryButton disabled={form.processing} className="mt-2">
                {form.processing ? 'Enviando...' : 'Chirps'}
            </PrimaryButton>
            {chirp?.id && (
                <SecondaryButton
                    onClick={() => setEditing(false)}
                    className="ml-2"
                >
                    Cancel
                </SecondaryButton>
            )}
        </form>
    )
}
