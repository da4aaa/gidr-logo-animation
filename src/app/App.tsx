import AppLaunch from "../imports/AppLaunchV2/AppLaunchV2";

export default function App() {
  return (
    <div className="flex items-center justify-center size-full bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="relative w-[375px] h-[812px] bg-black rounded-[50px] shadow-2xl overflow-hidden border-[14px] border-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-10" />
        <div className="size-full overflow-hidden rounded-[36px]">
          <AppLaunch />
        </div>
      </div>
    </div>
  );
}