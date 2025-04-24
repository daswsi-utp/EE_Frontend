'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      router.push('/productos');
    } catch (err) {
      setError('Credenciales incorrectas. Por favor intenta de nuevo.');
    }
  };

  return (
    <>
      <div className="h-[100vh] bg-[#f0e9e9] flex justify-center items-center">
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md ">
            <Link href="/">
              <div className="flex justify-center cursor-pointer">
                <p className="text-4xl font-bold text-primary">
                  <span className="text-hover-text">V</span>erde
                  <span className="text-hover-text">R</span>aíz
                </p>
              </div>
            </Link>
            <p className="mt-6 text-center text-3xl font-extrabold text-gray-700">Inicia sesión en tu cuenta</p>
            <p className="mt-2 text-center text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link href="/register">
                <span className="font-medium text-primary hover:text-secondary cursor-pointer">Regístrate</span>
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-secondary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Recordarme
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="/forgot-password">
                      <span className="font-medium text-secondary hover:text-primary cursor-pointer">
                        ¿Olvidaste tu contraseña?
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/">
                    <button
                      type="button"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Iniciar sesión
                    </button>
                  </Link>
                  <Link href="/admin">
                    <button
                      type="button"
                      className="w-full flex justify-center py-2 px-4 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Modo admin
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src="./Img/login_ee.svg" alt="login" className="w-[500px]" />
      </div>
    </>
  );
}
