import Image from 'next/image';

export function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[300px] overflow-hidden rounded-[3rem] drop-shadow-2xl">
      <Image
        src="/phone-mockup.png"
        alt="Study Room app on iPhone - Your Room is Watching"
        width={300}
        height={620}
        className="w-full object-cover"
        priority
      />
    </div>
  );
}
