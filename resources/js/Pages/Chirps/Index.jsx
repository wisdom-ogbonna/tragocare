import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Chirp from '@/Components/Chirp';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth, chirps }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('chirps.store'), { onSuccess: () => reset() });

  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Chirps" />

      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form onSubmit={submit}>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              FirstName
            </label>
            <input
              type="text"
              id="firstName"
              value={data.firstName}
              onChange={(e) => setData('firstName', e.target.value)}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
            />

          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              LastName
            </label>
            <input
              type="text"
              id="lastName"
              value={data.lastName}
              onChange={(e) => setData('lastName', e.target.value)}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={data.phone}
              onChange={(e) => setData('phone', e.target.value)}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
            />
            <InputError message={errors.phone} className="mt-2" />
          </div>

          <PrimaryButton className="mt-4" disabled={processing}>
            Create
          </PrimaryButton>
          <InputError message={errors.message} className="mt-2" />
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
