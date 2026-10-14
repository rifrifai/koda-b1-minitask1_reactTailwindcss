import { useState } from "react";

export default function Minitask1() {
    const [count, setCount] = useState(0);

    function Add() {
        if (count < 10) {
            setCount((count) => count + 1);
        }
    }

    function Kurang() {
        if (count > 0) {
            setCount((count) => count - 1);
        }
    }

    return(
        <>
            {/* <section className="flex flex-col items-center"> */}
            <section className="flex items-center justify-center gap-4">
                <button onClick={Add} className="m-2 px-6 py-2 bg-green-300 rounded-full shadow-md hover:bg-green-400">Tambah</button>
                    {count}
                <button onClick={Kurang} className="m-2 px-6 py-2 bg-red-300 rounded-full shadow-md hover:bg-red-500">Kurang</button>
            </section>       
        </>
    )
}