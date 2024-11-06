import Authform from '@/components/Authform'
import FooterTemplateTwo from '@/components/FooterTemplateTwo'
import Header from '@/components/Header'
import React from 'react'

const SignIn = () => {
  return (
    <section className='w-full h-auto flex-center gap-10 flex-1 flex-col'>
      <Header menuButton={false} />
      <div className='root-layout'>
        <div className='flex flex-center w-full h-full pt-[0] pb-[0]'>
          <Authform type='getIn' />
        </div>
      </div>
      <FooterTemplateTwo/>
    </section>
  )
}

export default SignIn