import CoffeeForm from "../components/CoffeeForm";
import { CiCoffeeCup } from "react-icons/ci";

export default function Coffee() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">

        <h1 className="flex items-center  gap-2 text-2xl font-bold tracking-tight md:text-3xl mt-4">
          Buy me a coffee 
          <CiCoffeeCup/>
        </h1>

        <p className="mt-4 max-w-lg text-muted-foreground">
          If you’ve found my work useful or enjoyed one of my projects, you can
          support me with a coffee. Every little bit helps!
        </p>

        <div className="mt-10 w-full max-w-md">
          <CoffeeForm />
        </div>
      </section>
    </main>
  );
}
