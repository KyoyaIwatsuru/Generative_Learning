'use client'

import { useState, useContext } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
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
  let work_id = -1
  let id = -1

  if (link === links[4].href) {
    link = links[0].href
  } else {
    work_id = Number(link.slice(1, 2))
    id = Number(link.slice(-1))
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
  const {confidence, setConfidence} = useContext(ValueContext)
  const dispatch = useContext(ValueDispatch);

  if (link === '/' + work_id.toString() + links[3].href + '/' + id.toString()) {
    return (
      <>
        <button onClick={() => handleOpen("xl")} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
          Next
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
        <Dialog
        open={size === "xl"}
        size={size}
        handler={handleOpen}
        >
          <DialogHeader>回答に確信がありますか？（数字が大きいほど確信あり）</DialogHeader>
          <DialogBody className="text-center">
            <div className="w-[80%] inline-flex rounded-md shadow-sm" role="group">
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'1'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                1
              </button>
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-r border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'2'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                2
              </button>
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'3'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                3
              </button>
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'4'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                4
              </button>
              <button type="button" className="w-1/5 p-5 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " value={'5'} onClick={(e) => setConfidence(e.currentTarget.value)}>
                5
              </button>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Link href={link}>
              <Button
                variant="gradient"
                color="green"
                onClick={() => {
                  handleOpen(null)
                  dispatch({type: 'result'})
                }}
              >
                <span>Next</span>
              </Button>
            </Link>
          </DialogFooter>
        </Dialog>
      </>
    )
  } else if (link === links[4].href) {
    return (
      <Link href={link}>
        <button onClick={() => dispatch({type: 'download'})} className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
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
        <button className="shadow-lg px-5 py-2.5 bg-button-next text-lg text-white font-semibold rounded-lg hover:bg-button-nextHover hover:shadow-sm hover:translate-y-0.5 transform transition inline-flex items-center">
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

  return (
    <List className="mt-[5%] mx-[20%]">
      {Choice.map((choice) => (
        <ListItem key={Choice.indexOf(choice)} className="p-3">
          <label
            htmlFor={`vertical-list-${Choice.indexOf(choice)}`}
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-5">
              {Choice.indexOf(choice) + 1 === 1
              ?
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
                  onChange={(e) => setChoice(e.currentTarget.value)}
                  defaultChecked
                />
              :
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
                  onChange={(e) => setChoice(e.currentTarget.value)}
                />
              }
            </ListItemPrefix>
            <Typography
              color="black"
              className="font-medium text-gray-900"
            >
              {choice}
            </Typography>
          </label>
        </ListItem>
      ))}
    </List>
  );
}
