import {useState, useEffect} from "react";

export const useResponsive = (breakpoints: Array<number>) => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const updateIndex = () => {
            const newIndex = breakpoints.findIndex((bp: any) => window.innerWidth <= bp);
            setIndex(newIndex === -1 ? breakpoints.length : newIndex);
        }
        updateIndex();

        window.addEventListener("resize", updateIndex);
        return () => window.removeEventListener("resize", updateIndex);
    }, [breakpoints]);

    return index;
}

// const breakpoint: number = useResponsive([600, 900, 1200, 1920]);

// return (<>
//   {breakpoint === 0 && <div>Mobile View</div>}
//   {breakpoint === 1 && <div>Tablet View</div>}
//   {breakpoint === 2 && <div>Laptop View</div>}
//   {breakpoint === 3 && <div>Ful View</div>}
// </>);
