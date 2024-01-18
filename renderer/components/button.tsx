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
import { links, works } from '@/lib/main_data';
import { ValueContext, ValueDispatch } from '@/components/value'

export function HomeButton () {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  const dispatch = useContext(ValueDispatch);

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
              onClick={() => {
                fetch('http://localhost:8765/recording/capture')
                handleOpen(null)
                dispatch({type: 'download'})
                fetch('http://localhost:8765/recording/stop')
              }}
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
  let work = 0
  let id = 0
  if (link.slice(2, 3) === '/') {
    work = Number(link.slice(1, 2))
    id = Number(link.slice(-1))
    const href = link.slice(2, -2)

    for (let i = 0; i < links.length; i++) {
      if (href === links[i].href) {
        if (i === links.length - 1) {
          const last = works[work - 1].work.length - 1
          if (id === works[work - 1].work[last].id) {
            link = links[0].href
            break
          } else {
            link = '/' + work.toString() + links[1].href + '/' + (id + 1).toString()
            break
          }
        } else {
          link = '/' + work.toString() + links[i + 1].href + '/' + id.toString()
          break
        }
      }
    }
  } else {
    work = Number(link.slice(1, 3))
    id = Number(link.slice(-1))
    const href = link.slice(3, -2)

    for (let i = 0; i < links.length - 1; i++) {
      if (href === links[i].href) {
        if (i === links.length - 1) {
          const last = works[work - 1].work.length - 1
          if (id === works[work - 1].work[last].id) {
            link = links[0].href
            break
          } else {
            link = '/' + work.toString() + links[1].href + '/' + (id + 1).toString()
            break
          }
        } else {
          link = '/' + work.toString() + links[i + 1].href + '/' + id.toString()
          break
        }
      }
    }
  }

  const router = useRouter()
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  const {understand_time, setUnderstand_time} = useContext(ValueContext)
  const {finish_time, setFinish_time} = useContext(ValueContext)
  const {websocket, setWebSocket} = useContext(ValueContext)
  const {paragraph, setParagraph} = useContext(ValueContext)
  const {understand, setUnderstand} = useContext(ValueContext)
  const {choice, setChoice} = useContext(ValueContext)
  const {flag, setFlag} = useContext(ValueContext)
  const {selects, setSelects} = useContext(ValueContext)
  const {flags, setFlags} = useContext(ValueContext)
  const Flag = !flags.every(value => value === false)
  const dispatch = useContext(ValueDispatch);

  if (link === '/' + work.toString() + links[2].href + '/' + id.toString()) {
    return (
      <>
        <button onClick={() => {
          fetch('http://localhost:8765/recording/capture')
          setWebSocket(false)
          handleOpen("xxl")
          setUnderstand_time(new Date().getTime())
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
          <DialogHeader className="mt-[15%] mx-auto">文章をどれくらい理解できましたか？</DialogHeader>
          <DialogBody className="mt-[5%] text-center">
            <div className="w-[80%] inline-flex rounded-md shadow-sm" role="group">
              <button type="button" className="w-1/4 p-5 text-lg font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'1'} onClick={(e) => setUnderstand(e.currentTarget.value)}>
                理解できなかった
              </button>
              <button type="button" className="w-1/4 p-5 text-lg font-medium text-gray-900 bg-transparent border-y border-r border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'2'} onClick={(e) => setUnderstand(e.currentTarget.value)}>
                あまり理解できなかった
              </button>
              <button type="button" className="w-1/4 p-5 text-lg font-medium text-gray-900 bg-transparent border-y border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'3'} onClick={(e) => setUnderstand(e.currentTarget.value)}>
                ある程度理解できた
              </button>
              <button type="button" className="w-1/4 p-5 text-lg font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'4'} onClick={(e) => setUnderstand(e.currentTarget.value)}>
                理解できた
              </button>
            </div>
          </DialogBody>
          <DialogFooter className="mt-[3%] mr-[5%]">
            <Link href={link}>
              <Button
                className='px-8 py-3'
                variant="gradient"
                color="green"
                onClick={() => {
                  fetch('http://localhost:8765/recording/capture')
                  handleOpen(null)
                }}
              >
                <span className='text-base'>Next</span>
              </Button>
            </Link>
          </DialogFooter>
        </Dialog>
      </>
    )
  } else if (link === '/' + work.toString() + links[3].href + '/' + id.toString()) {
    return (
      <button disabled={flag} onClick={() => {
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
  } else if (link === '/' + work.toString() + links[4].href + '/' + id.toString()) {
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
  } else if (link === '/' + work.toString() + links[5].href + '/' + id.toString()) {
    return (
      <button disabled={Flag} onClick={() => {
        fetch('http://localhost:8765/recording/capture')
        setTimeout(() => {
          router.push(link)
        }, 500);
        setFinish_time(new Date().getTime())
        dispatch({type: 'result'})
      }} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
        Next
        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    )
  } else if (link === '/' + work.toString() + links[1].href + '/' + (id + 1).toString()) {
    return (
      <button onClick={() => {
        fetch('http://localhost:8765/recording/capture')
        setParagraph(0)
        setUnderstand('1')
        setChoice('0')
        setFlag(true)
        setSelects(['0', '0', '0', '0', '0', '0'])
        setFlags([true, true, true, true, true, true])
        setTimeout(() => {
          router.push(link)
          setWebSocket(true)
        }, 500);
        fetch('http://localhost:8765/recording/stop')
      }} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
        Next
        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    )
  } else if (link === links[0].href) {
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

export function RadioVerticalList({
  params,
}: {
  params: { work: number; id: number }
}) {
  const { work, id } = params
  const {paragraph, setParagraph} = useContext(ValueContext)
  const text = works[work - 1].work[id - 1].paragraph[paragraph].text
  const question = works[work - 1].work[id - 1].paragraph[paragraph].question
  const choices = works[work - 1].work[id - 1].paragraph[paragraph].choices
  const Choice = choices.trim().split(/\r\n|\r|\n/).map(choice => choice.trim())
  const {choice, setChoice} = useContext(ValueContext)
  const {flag, setFlag} = useContext(ValueContext)

  return (
    <>
      {/* <h1 className="mt-[1%] text-xl font-bold text-center text-gray-900">第{paragraph + 1}段落</h1>
      <p className="mt-0 mx-[10%] text-lg text-justify">{text}</p> */}
      <h1 className="mt-[8%] text-xl font-bold text-center text-gray-900">問題： {question}</h1>
      <List className="mt-[2%] mx-[20%]">
        {Choice.map((choice, index) => (
          <ListItem key={index} className="p-0">
            <label
              htmlFor={`vertical-list-${index}`}
              className="flex w-full cursor-pointer items-center px-6 py-5"
            >
              <ListItemPrefix className="mr-5">
                <Radio
                  name="vertical-list"
                  id={`vertical-list-${index}`}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  crossOrigin=""
                  value={index + 1}
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
    </>
  );
}
