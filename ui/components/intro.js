import { CMS_NAME, CMS_URL } from '@/lib/constants'
import Layout from './layout'

export default function Intro() {
  return (
    
      <section className="flex-col md:flex-row flex items-center md:justify-between">
          <div class="col-sm">
            <h1 className="text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 rounded-circle">
            artfilm.mn
            </h1></div>
          <div class="col-sm">
            {/* <Layout> */}
              <div class="searchbar">
                <input class="search_input" type="text" name="" placeholder="Хайх..."/>
                <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
              </div>
            {/* </Layout> */}
          </div>
          <div class="col-sm">
            <h4 className="text-left md:text-left text-lg mt-5 md:pl-8">
            menu
            </h4>
          </div>
      </section>
    
  )
}
