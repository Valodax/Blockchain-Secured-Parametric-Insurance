import Head from 'next/head';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Next.js Web3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to my Next.js Web3 App
        </h1>

        <p className="mt-3 text-2xl">
          This is some sample text to demonstrate the layout and styling of the
          homepage. You can customize this page to suit your needs.
        </p>

        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Connect to Web3
          </button>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-500">
          Made by{' '}
          <a
            className="text-blue-600 hover:text-blue-800"
            href="https://github.com/valodax"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mitchell Spencer
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
