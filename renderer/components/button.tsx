'use client'

import { useState, useContext } from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import ReactIcon from "@/public/react.svg";
import {
  Radio,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { links, works } from '@/lib/data';
import { ValueContext, ValueDispatch } from '@/components/value'

export function HomeButton () {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  return (
    <>
      <button onClick={() => handleOpen("xs")} className="shadow-lg px-5 py-2.5 bg-button-home text-lg text-white font-semibold rounded-lg hover:bg-button-homeHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
        <ReactIcon className="w-6 h-6 me-2 -ms-1 text-white" />
        Home
      </button>
      <Dialog
      open={size === "xs"}
      size={size}
      handler={handleOpen}
      >
        <DialogHeader className="block text-center">Homeに戻りますか？</DialogHeader>
        <DialogFooter className="block text-center">
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>No</span>
          </Button>
          <Link href="/">
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span>Yes</span>
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export function NextButton () {
  let link = usePathname()
  const work_id = Number(link.slice(1, 2))
  const id = Number(link.slice(-1))

  if (link === links[4].href) {
    link = links[0].href
  } else {
    const href = link.slice(2, -2)
    for (let i = 0; i < links.length - 1; i++) {
      if (href === links[i].href) {
        if (i === links.length - 2) {
          const last = works[work_id - 1].work.length - 1
          if (id === works[work_id - 1].work[last].id) {
            link = links[4].href
            break
          } else {
            link = '/' + work_id.toString() + links[1].href + '/' + (id + 1).toString()
            break
          }
        } else {
          link = '/' + work_id.toString() + links[i + 1].href + '/' + id.toString()
          break
        }
      }
    }
  }
  
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  const {choice, setChoice} = useContext(ValueContext)
  const {confidence_time, setConfidence_time} = useContext(ValueContext)
  const {confidence, setConfidence} = useContext(ValueContext)
  const {explanation_time, setExplanation_time} = useContext(ValueContext)
  const {flag, setFlag} = useContext(ValueContext)
  const dispatch = useContext(ValueDispatch);
  const router = useRouter()

  if (link === '/' + work_id.toString() + links[1].href + '/' + (id + 1).toString()) {
    return (
      <button onClick={() => {
        fetch('http://localhost:8765/recording/capture')
        setTimeout(() => {
          router.push(link)
        }, 500);
      }} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
        Next
        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    )
  } else if (link === '/' + work_id.toString() + links[2].href + '/' + id.toString()) {
    return (
      <Link href={link}>
        <button onClick={() => {
          fetch('http://localhost:8765/recording/capture')
          setChoice('0')
          setConfidence('1')
          setFlag(true)
        }} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
          Next
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </Link>
    )
  } else if (link === '/' + work_id.toString() + links[3].href + '/' + id.toString()) {
    return (
      <>
        <button disabled={flag} onClick={() => {
          fetch('http://localhost:8765/recording/capture')
          handleOpen("xxl")
          setConfidence_time(new Date().getTime())
        }} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
          Next
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
        <Dialog
        open={size === "xxl"}
        size={size}
        handler={handleOpen}
        >
          <DialogHeader className="mt-[15%] mx-auto">回答に確信がありますか？（数字が大きいほど確信あり）</DialogHeader>
          <DialogBody className="mt-[5%] text-center">
            <div className="w-[80%] inline-flex rounded-md shadow-sm" role="group">
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'1'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                1
              </button>
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border-y border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'2'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                2
              </button>
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'3'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                3
              </button>
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border-y border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'4'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                4
              </button>
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'5'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                5
              </button>
            </div>
          </DialogBody>
          <DialogFooter className="mt-[3%] mr-[5%]">
            {/* <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button> */}
            <Link href={link}>
              <Button
                className='px-8 py-3'
                variant="gradient"
                color="green"
                onClick={() => {
                  fetch('http://localhost:8765/recording/capture')
                  handleOpen(null)
                  setExplanation_time(new Date().getTime())
                  dispatch({type: 'result'})
                }}
              >
                <span className='text-base'>Next</span>
              </Button>
            </Link>
          </DialogFooter>
        </Dialog>
      </>
    )
  } else if (link === links[4].href) {
    return (
      <Link href={link}>
        <button onClick={() => {
          fetch('http://localhost:8765/recording/capture')
          dispatch({type: 'download'})
          fetch('http://localhost:8765/recording/stop')
        }} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
          Next
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </Link>
    )
  } else {
    return (
      <Link href={link}>
        <button onClick={() => fetch('http://localhost:8765/recording/capture')} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
          Next
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </Link>
    )
  }
}

export function RadioVerticalList({ choices }: { choices: string }) {
  const Choice = choices.trim().split(/\r\n|\r|\n/).map(choice => choice.trim())
  const {choice, setChoice} = useContext(ValueContext)
  const {flag, setFlag} = useContext(ValueContext)

  return (
    <List className="mt-[5%] mx-[20%]">
      {Choice.map((choice) => (
        <ListItem key={Choice.indexOf(choice)} className="p-3">
          <label
            htmlFor={`vertical-list-${Choice.indexOf(choice)}`}
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-5">
              <Radio
                name="vertical-list"
                id={`vertical-list-${Choice.indexOf(choice)}`}
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                crossOrigin=""
                value={Choice.indexOf(choice) + 1}
                onChange={(e) => {
                  setFlag(false)
                  setChoice(e.currentTarget.value)
                }}
              />
            </ListItemPrefix>
            <Typography
              color="black"
              className="font-medium text-gray-900 text-lg"
            >
              {choice}
            </Typography>
          </label>
        </ListItem>
      ))}
    </List>
  );
}
