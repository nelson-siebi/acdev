import { Hero } from "@/components/sections/Hero"
import { ImpactNumbers } from "@/components/sections/ImpactNumbers"
import { Programmes } from "@/components/sections/Programmes"
import { Actions } from "@/components/sections/Actions"
import { Histoire } from "@/components/sections/Histoire"

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactNumbers />
      <Programmes />
      <Actions />
      <Histoire />
    </>
  )
}
