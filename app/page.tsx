// import Image from "next/image"
import dynamic from 'next/dynamic';

const Pdf = dynamic(() => import('./components/Pdf'), {
  ssr: false
});


export default function Home() {
  

  return (
    <div>
      <Pdf />
    </div>
  )
}
