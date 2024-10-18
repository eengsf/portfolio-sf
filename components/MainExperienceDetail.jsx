import Image from 'next/image';

const MainExperienceDetail = ({ img, judul, category, desc }) => {
  return (
    <div className="flex flex-col w-full gap-5 p-4 border border-slate-300 rounded-xl">
      <div className="flex items-center w-full gap-3">
        <div className="w-16 h-16 sm:w-12 sm:h-12 ">
          <Image
            src={`/${img}`}
            alt="image"
            width={500}
            height={500}
            priority
            className="object-cover w-full h-full "
          />
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-base font-semibold sm:text-lg">{judul}</h1>
          <i className="text-xs sm:text-sm">{category}</i>
        </div>
      </div>
      <div>
        {desc.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default MainExperienceDetail;
