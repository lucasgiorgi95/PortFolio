import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                Linkedin <LinkedInIcon/>
                </>
            ),
            href:'https://www.linkedin.com/in/lucasgiorgi-fullstack/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github <GitHubIcon/>
                </>
            ),
            href:'https://github.com/lucasgiorgi95'
        },
        {
            id:3,
            child:(
                <>
                Mail <MailOutlineIcon/>
                </>
            ),
            href: "mailto:lucas1995giorgi@gmail.com",
        },
        {
            id:4,
            child:(
                <>
                WhatsApp <WhatsAppIcon/>
                </>
            ),
            href:'https://wa.me/5493794815101'
        },
        {
            id:5,
            child:(
                <>
                C.V. <PersonIcon/>
                </>
            ),
            href:'/CV-Lucas-Full-Stack-Dev.pdf',
            style:'rounded-br-md',
            download:true
        },
        
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id, child, href, style, download})=>(
                 <li key={id} className={'flex justify-between  items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+" "+style}>
                 <a 
                 href={href} 
                 className=' flex justify-between items-center w-full text-white font-bold'
                 download={download}
                 target='_blank'
                 rel='noreferrer'
                 >
                    {child}
                 </a>
             </li>
        ))

        }


       
      </ul>
    </div>
  )
}

export default SocialLinks
