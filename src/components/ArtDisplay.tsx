import cover from "@/assets/cover.png"

export function ArtDisplay() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <img
                loading="lazy"
                src={cover}
                className=" w-full rotate-180"
            />
            <img
                loading="lazy"
                src={cover}
                className="w-full"

            />
        </div>
    )
}