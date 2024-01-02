import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import { SettingsTabs } from "@/components/SettingsTabs";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-row justify-between pb-5 border-b text-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
          </div>

          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">
              Cancel
            </button>
            <button type="submit" form="settings" className="rounded-lg px-4 py-2 text-sm text-white font-semibold shadow-sm bg-violet-600 hover:bg-violet-700">
              Save
            </button>
          </div>
        </div>

        <form id='settings' action="" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl defaultValue="Pedro" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Moreira" />
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Email address</label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue="pedro@email.com" />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">This will be displayed on your profile</span>
            </label>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Role</label>
            <InputRoot>
              <InputControl id="email" type="email" defaultValue="CTO" />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <InputRoot>
              <InputControl id="contry" defaultValue="Brazil" />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">Timezone</label>
            <InputRoot>
              <InputControl id="contry" defaultValue="Pacific timezone" />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">
                Write a short introduction.
              </span>
            </label>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
              Portfolio projects
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">
                Share a few snippets of your work
              </span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">
              Cancel
            </button>
            <button type="submit" className="rounded-lg px-4 py-2 text-sm text-white font-semibold shadow-sm bg-violet-600 hover:bg-violet-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
