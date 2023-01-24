import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="bg-pink-100 text-gray-700">
        <div className="mx-auto max-w-screen-lg px-3 py-6">
          <div className="flex justify-between items-center">
            <a href='#'><h1 className="font-bold text-3xl bg-gradient-to-br from-pink-500 to-purple-400 bg-clip-text text-transparent">Celocaly</h1></a>
            <div className="nav-link flex gap-x-3 font-medium">
              <a className="hover:text-black" href='https://www.instagram.com/celocaly/' target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="hover:text-black" href='#'>Trakteer</a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-lg px-3 py-12">
          <div className="flex flex-col-reverse gap-y-12 items-center md:flex-row md:justify-between md:gap-x-24 mb-8">
            <div>
              <div className="text-4xl font-bold">
                Hi there, I&#39;m <span className="bg-gradient-to-br from-pink-500 to-purple-400 bg-clip-text text-transparent">Celocaly</span> 👋
              </div>
              <p className="mt-4 text-xl leading-9 whitespace-pre-line text-grey-600">
                Halo teman-teman! Namaku Celo, Kalian bisa panggil aku Celo atau Cel.
                By the way, aku bukan minor yaa, umurku 20 tahun, tapi emang tinggi badanku minimalis jadi terlihat sangat pocket size hehe 😁
                <br />
                Karena aku termasuk cosplayer baru, aku sangat menerima saran dari teman-teman, seperti character apa yang mungkin cocok untukku 😊
              </p>
              <div className="mt-6 flex gap-1">
                <a href='https://www.instagram.com/celocaly/' target="_blank" rel="noopener noreferrer">
                  <Image
                    className="instagram h-12 w-auto hover:translate-y-1"
                    src="/assets/images/button.svg"
                    loading="lazy"
                    alt='instagram'
                    width={193}
                    height={59} />
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <Image
                className="h-64 w-64 rounded-full object-cover"
                src="/assets/images/image02.jpg"
                loading="lazy"
                alt='my photo'
                width={1020}
                height={688}
              />
            </div>
          </div>
        </div>

      </div>
      <div className="mx-auto max-w-screen-lg px-3 py-12 pb-28">
        <div className="mb-12 text-3xl font-bold">
          Recent <span className="bg-gradient-to-br from-pink-500 to-purple-400 bg-clip-text text-transparent">Cosplay</span>
        </div>
        <div className="grid grid-cols-1 gap-x-24 md:grid-cols-2">
          <div className="flex flex-col">
            <div className="aspect-w-3 aspect-h-2">
              <Image
                className="h-full w-full object-cover object-center hover:translate-y-1"
                src="/assets/images/cos1.jpg"
                alt="cosplay1"
                loading='lazy'
                width={2598}
                height={4618} />
            </div>
            <div className="text-xl font-semibold mt-2">
              Female Ryomen Sukuna
            </div>
            <p className="mt-4 leading-5 text-sm text-grey-600">
              Ryomen Sukuna merupakan salah satu kutukan terkuat dalam anime Jujutsu Kaisen.
              Kutukan yang bersemayam dalam tubuh Yuji Itadori ini diceritakan sebagai salah satu makhluk paling ditakuti oleh penyihir Jujutsu.
            </p>
            <a href='https://www.instagram.com/p/ClycjjWB-FV/' target="_blank" rel="noopener noreferrer" className="mt-6">
              <Image
                className="instagram h-12 w-auto hover:translate-y-1"
                src="/assets/images/button.svg"
                loading="lazy"
                alt='instagram cosplay 1'
                width={193}
                height={59} />
            </a>
          </div>
          <div className="flex flex-col mt-20 ml-0 mb:ml-12 lg:ml-12">
            <div className="aspect-w-3 aspect-h-2 col-span-1">
              <Image
                className="h-full w-full object-cover object-center hover:translate-y-1"
                src="/assets/images/cos2.jpg"
                alt="cosplay1"
                loading='lazy'
                width={2598}
                height={4618} />
            </div>
            <div className="text-xl font-semibold mt-2">
              Asa Mitaka / Yoru
            </div>
            <p className="mt-4 leading-5 text-sm text-grey-600">
              Asa Mitaka merupakan seorang siswi SMA yang pada awalnya manusia, dan kemudian di jadikan wadah (fiend) oleh War Devil (Yoru).
              Dia adalah protagonis wanita di serial Chainsaw Man pada Academy Saga arc.
            </p>
            <a href='https://www.instagram.com/p/CnMUpOYhATV/' target="_blank" rel="noopener noreferrer" className="mt-6">
              <Image
                className="instagram h-12 w-auto hover:translate-y-1"
                src="/assets/images/button.svg"
                loading="lazy"
                alt='instagram cosplay 2'
                width={193}
                height={59} />
            </a>
          </div>
          <div className="flex flex-col mt-20 md:mt-0 lg:mt-0">
            <div className="aspect-w-3 aspect-h-2">
              <Image
                className="h-full w-full object-cover object-center hover:translate-y-1"
                src="/assets/images/cos5.jpg"
                alt="cosplay4"
                loading='lazy'
                width={2598}
                height={4618} />
            </div>
            <div className="text-xl font-semibold mt-2">
              Yosano Akiko
            </div>
            <p className="mt-4 leading-5 text-sm text-grey-600">
              Yosano Akiko, anggota dan dokter dari Agensi Detektif Bersenjata.
              Memiliki kemampuan yang dapat menyembuhkan semua luka.
              Namun, kemampuannya hanya dapat digunakan untuk menyembuhkan luka yang mematikan.
            </p>
            <a href='https://www.instagram.com/celocaly/' target="_blank" rel="noopener noreferrer" className="mt-6">
              <Image
                className="instagram h-12 w-auto hover:translate-y-1"
                src="/assets/images/button.svg"
                loading="lazy"
                alt='instagram cosplay 1'
                width={193}
                height={59} />
            </a>
          </div>
          <div className="flex flex-col mt-20">
            <div className="aspect-w-3 aspect-h-2">
              <Image
                className="h-full w-full object-cover object-center hover:translate-y-1"
                src="/assets/images/cos4.jpg"
                alt="cosplay4"
                loading='lazy'
                width={2598}
                height={4618} />
            </div>
            <div className="text-xl font-semibold mt-2">
              Seifuku
            </div>
            <p className="mt-4 leading-5 text-sm text-grey-600">
              Seifuku adalah sebutan bagi seragam sekolah di Jepang.
              Serafuku atau seifuku yang kemudian lebih dikenal dengan sebutan sailor sefuku karena populernya film animasi sailormoon yang berpakaian seifuku adalah salah satu ikon pop kultur di Jepang.
            </p>
            <a href='https://www.instagram.com/celocaly/' target="_blank" rel="noopener noreferrer" className="mt-6">
              <Image
                className="instagram h-12 w-auto hover:translate-y-1"
                src="/assets/images/button.svg"
                loading="lazy"
                alt='instagram cosplay 1'
                width={193}
                height={59} />
            </a>
          </div>
          <div className="flex flex-col mt-20 md:mt-0 lg:mt-0 lg:mt-0 mr-0 md:mr-12 lg:mr-12">
            <div className="aspect-w-3 aspect-h-2">
              <Image
                className="h-full w-full object-cover object-center hover:translate-y-1"
                src="/assets/images/cos3.jpg"
                alt="cosplay1"
                loading='lazy'
                width={2598}
                height={4618} />
            </div>
            <div className="text-xl font-semibold mt-2">
              Orimoto Rika
            </div>
            <p className="mt-4 leading-5 text-sm text-grey-600">
              Orimoto Rika atau lebih sering dipanggil dengan nama Rika-chan adalah tokoh kunci dalam prekuel Jujutsu Kaisen.
              Dia sendiri berperan sebagai roh yang dikutuk sehingga bangkit menjadi monster yang ditakuti para praktisi jujutsu kala itu.
            </p>
            <a href='https://www.instagram.com/p/CmWYBYQLym0/' target="_blank" rel="noopener noreferrer" className="mt-6">
              <Image
                className="instagram h-12 w-auto hover:translate-y-1"
                src="/assets/images/button.svg"
                loading="lazy"
                alt='instagram cosplay 1'
                width={193}
                height={59} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-pink-100 text-gray-700">
        <div className="mx-auto max-w-screen-lg px-3 py-12 pb-32">
          <div className="mb-12 text-3xl font-bold">
            My <span className="bg-gradient-to-br from-pink-500 to-purple-400 bg-clip-text text-transparent">Cosplan</span>
          </div>
          <div className="grid grid-cols-1 gap-24 md:grid-cols-3 justify-items-center">
            <div className="flex flex-col">
              <div className="h-64 w-64 full-rounded object-cover">
                <Image
                  className="h-64 w-64 rounded-full object-cover"
                  src="/assets/images/cosplan1.jpg"
                  loading="lazy"
                  alt='cosplan1'
                  width={1020}
                  height={688}
                />
                <div className="text-xl font-semibold mt-4 text-center">
                  Marin Kitagawa
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-64 w-64 full-rounded object-cover">
                <Image
                  className="h-64 w-64 rounded-full object-cover"
                  src="/assets/images/cosplan2.jpg"
                  loading="lazy"
                  alt='cosplan2'
                  width={1020}
                  height={688}
                />
                <div className="text-xl font-semibold mt-4 text-center">
                  Krul Tepes
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-64 w-64 full-rounded object-cover">
                <Image
                  className="h-64 w-64 rounded-full object-cover"
                  src="/assets/images/cosplan3.jpg"
                  loading="lazy"
                  alt='cosplan3'
                  width={1020}
                  height={688}
                />
                <div className="text-xl font-semibold mt-4 text-center">
                  Xiangling
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-64 w-64 full-rounded object-cover">
                <Image
                  className="h-64 w-64 rounded-full object-cover"
                  src="/assets/images/cosplan4.jpg"
                  loading="lazy"
                  alt='cosplan4'
                  width={1020}
                  height={688}
                />
                <div className="text-xl font-semibold mt-4 text-center">
                  Yaoyao
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-64 w-64 full-rounded object-cover">
                <Image
                  className="h-64 w-64 rounded-full object-cover"
                  src="/assets/images/cosplan5.jpg"
                  loading="lazy"
                  alt='cosplan5'
                  width={1020}
                  height={688}
                />
                <div className="text-xl font-semibold mt-4 text-center">
                  Raiden Shogun
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-64 w-64 full-rounded object-cover">
                <Image
                  className="h-64 w-64 rounded-full object-cover"
                  src="/assets/images/cosplan6.jpg"
                  loading="lazy"
                  alt='cosplan6'
                  width={1020}
                  height={688}
                />
                <div className="text-xl font-semibold mt-4 text-center">
                  Anya (Teenager)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
