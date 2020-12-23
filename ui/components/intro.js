import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between">
 
        <div class="col-sm">
          <h1 className="text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 rounded-circle">
          artfilm.mn
          </h1></div>
        <div class="col-sm">Search Bar</div>
        <div class="col-sm">
          <h4 className="text-left md:text-left text-lg mt-5 md:pl-8">
          menu
          </h4>
        </div>

    </section>
  )
}
