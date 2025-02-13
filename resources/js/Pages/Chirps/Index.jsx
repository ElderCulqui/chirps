import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ChirpItem from '@/Components/ChirpItem';
import ChirpForm from '@/Components/ChirpForm';

export default function Index({chirps}) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Chirps
                </h2>
            }
        >
            <Head title="Chirps" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <ChirpForm />
                        </div>
                    </div>
                    <div className="mt-6 bg-white divide-y rounded-lg shadow-md dark:divide-gray-600 dark:bg-gray-800">
                        {chirps.map((chirp) => (
                            <ChirpItem
                                key={`chirps-${chirp.id}`}
                                chirp={chirp}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
