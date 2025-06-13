"use client"
// pages/index.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, Car, Shield, Clock, Users, Star, Menu, X } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>RentCar Indonesia - Sewa Mobil Terpercaya</title>
        <meta name="description" content="Sewa mobil berkualitas dengan harga terjangkau di seluruh Indonesia. Armada lengkap, pelayanan 24/7." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  RentCar
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  About
                </Link>
                <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Masuk
                </Link>
                <Link href="/auth/register" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                  Daftar
                </Link>
              </nav>

              {/* Mobile menu button */}
              <button 
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4">
                  <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2">
                    About
                  </Link>
                  <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2">
                    Masuk
                  </Link>
                  <Link href="/register" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center font-medium">
                    Daftar
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Sewa Mobil
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Terpercaya
                    </span>
                    di Indonesia
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Nikmati perjalanan nyaman dengan armada mobil berkualitas tinggi. 
                    Pelayanan 24/7, harga transparan, dan booking mudah dalam genggaman Anda.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                    Mulai Sewa Sekarang
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                    Lihat Armada
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600">Unit Mobil</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10K+</div>
                    <div className="text-gray-600">Pelanggan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">4.9</div>
                    <div className="text-gray-600 flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      Rating
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Rental Car" 
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="mt-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Toyota Avanza 2023</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-blue-600">Rp 300K</span>
                      <span className="text-gray-500">/hari</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        7 Kursi
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        Asuransi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Mengapa Pilih <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RentCar?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kami berkomitmen memberikan pengalaman rental mobil terbaik dengan layanan profesional dan armada berkualitas tinggi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Armada Lengkap</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dari city car hingga SUV premium, kami menyediakan berbagai pilihan kendaraan sesuai kebutuhan perjalanan Anda.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Terjamin Aman</h3>
                <p className="text-gray-600 leading-relaxed">
                  Semua kendaraan dilengkapi asuransi komprehensif dan telah lulus uji kelayakan untuk menjamin keamanan perjalanan.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Layanan 24/7</h3>
                <p className="text-gray-600 leading-relaxed">
                  Customer service siap membantu Anda kapan saja dengan respons cepat dan solusi terbaik untuk setiap kebutuhan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Dapatkan pengalaman rental mobil terbaik dengan booking mudah dan harga transparan. 
              Bergabunglah dengan ribuan pelanggan yang puas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                Daftar Sekarang
              </Link>
              <Link href="/login" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Sudah Punya Akun?
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">RentCar</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Solusi rental mobil terpercaya di Indonesia dengan layanan profesional dan armada berkualitas tinggi.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Layanan</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Rental Harian</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Rental Bulanan</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Rental + Driver</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Rental Wisata</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>+62 811 1234 5678</li>
                  <li>info@rentcar.id</li>
                  <li>Jakarta, Indonesia</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 RentCar Indonesia. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;