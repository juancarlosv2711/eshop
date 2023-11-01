import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home({country}) {
  const { data: session } = useSession()
  return (
    <div>
      <Header country={country}/>
      <Footer country={country} />
     </div>
  );
}

export async function getServerSideProps(){
  let data = await axios
  .get('https://api.ipregistry.co/?key=w1rbedms6pq3ppfk')
  .then((res) => {
    return res.data.location.country;
  }).catch((err) => {
    console.log(err);
  });
 return {
  props: {
    // country: {name: data.name, flag: data.flag.emojitwo},
    country: {name: "Venezuela", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACTCAMAAADSiocKAAAAdVBMVEX30RfPFCsAM6v///+qu+MGOK0ENqxvjND19/yAmdX6+/3Y4PJKbsPr7/iRp9srVblohs0cSbRefsoMPa/E0Ozg5vW+y+o0Xbw8Y78RQbHO2O9PcsUgTbYmUbhigcujteHl6vazwuZWeMeCm9ZEacHK1e53ktL+VGirAAADCElEQVR4nO2ZaZOiMBCGXVsOg9yX4O24/v+fuMQDZmq1cLFDbc+8zwesYIB+iqTpwGQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4u028M5KQCOTYsa9TLjSu3WIx6uXHldrtRLzeqnO379pjXMyj39/w6EZ1e6MaGQbnN+XMrcemG63zeP9+Yi8CgXErbZlttb81NfXXzwtuObaU3lJqLwOScc9VqE7jHe9PaabddOwyP7i5cKN9gACblPFJEWdcOtFzQtTNqOngGAzAnZyW+lim7PTkVBeVdu9T/+4m5jGJKrjrvLzPMj9tdpZrbU0d1tvHFnvbnylAQpuSW88M19LpNGNFSb8t7gpmm1wzjH+ZLQ0GYnHPnJjW6VDwZdlZBrkd0fvwvCyblVpRbdhk9qScXUWlbOa0MBmBArr1TZX/kqy7hGMgr/HJBmx7ior930Sac6oM9FEY5O9G5w3G7HeHzznfCrpK+lGVpwlhac945xw3i4/Cnck5JPPed/o4vwylnNyWJohfG4mMKfbTHuSZinXML/dzKV4Pis1e5Ppp1qc4qt74ua7zonyv9NPKuy6E1ZzyccpU3uORoCxqPsxRjlEszUs3QioYeHzVDWlHGuL5jlDs6pV35NLhQXJJf2aVz5IuI+yEe0eBZsx5+05/ALWfXg8soq+Z+NcZefpX9XQwc+hh8K5AKk1zMupheMj3KmeScoL/P6wRM1TOTXLbnOc+VPOvv8wo8cpUixlRXEsX9vV7gfblkNptlRHXzwzCanOY0NVHW/CRvn4zhzrWfOAKGh7A9V48+lwyDY1iGlxeQPtNS7LT/8rnkHVjm3FaHw/Z+50Ofbdvfrx8WuQMpl++LhkeuogPHmTjkUuWF64w4BlLDhn5vwlpxLFo55JJdqjMB04vxs85LVvB+ruSRi7/8/EdnQ+EsFchJZfLrGwM5qUBOKpCTCuSkAjmpQE4qkJMK5KQCOalATiqQkwrkpAI5qUBOKpCTCuSkAjmpQE4qkJMK5KQCOalATiqQkwrkpPIHVMWTKLHa11MAAAAASUVORK5CYII="},
  },
 }
}