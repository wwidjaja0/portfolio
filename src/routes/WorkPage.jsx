import MainLayout from "../layouts/MainLayout";

export default function WorksPage() {
  return (
    <div>
      <MainLayout>
        <div className="py-20 px-20 md:py-40 md:px-40 lg:py-80 lg:px-80">
          <h1 className="text-8xl">Hi. I&apos;m Widjaja.</h1>
          <h2 className="text-4xl font-poppins">Welcome to my homepage.</h2>
        </div>
        <div className="flex justify-center pt-40 text-8xl">
          Under Construction...
        </div>
      </MainLayout>
    </div>
  );
}
