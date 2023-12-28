import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Chirp from '@/Components/Chirp';
export default function Index({ auth, chirps }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Caregivers" />

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-8 py-4 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-8 py-4 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                User
                            </th>
                            <th
                                scope="col"
                                className="px-8 py-4 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Content
                            </th>
                            <th
                                scope="col"
                                className="px-8 py-4 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                AGE
                            </th>
                            {/* Add additional headers based on your data structure */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {chirps.map(chirp => {
                            console.log(chirp); // Log chirp object to the console
                            return (
                                <tr key={chirp.id}>
                                    <td className="px-8 py-4">{chirp.id}</td>
                                    <td className="px-8 py-4">{chirp.email}</td>
                                    <td className="px-8 py-4">{chirp.lastName}</td>
                                    <td className="px-8 py-4">{chirp.firstName}</td>

                               
                                    {/* Other cells */}
                                </tr>
                            );
                        })}

                    </tbody>

                </table>
            </div>
        </AuthenticatedLayout>
    );
}
