import { Rows } from "./HomePage";

export const Leadership = () => {
  return (
    <div className="flex justify-center w-full px-4 md:px-6 lg:px-0 mb-[100px]">
      <section className="mt-[84px] max-md:mt-10 w-[1140px] max-w-full">
        <div className="h-auto md:h-[155px] w-full md:w-[749px] text-black font-normal">
          <h2 className="text-[35px] md:text-[45px] lg:text-[55px]">
            Leadership
          </h2>
          <Rows />
          <p className="text-base md:text-md leading-5 tracking-[0.25px]">
            A 4 years + 2 Years foundational course exclusively for male students,
            the Basic Aalimiyyat Course introduces students to key areas of
            Islamic knowledge. This course emphasizes Arabic language skills and
            provides a structured path to understanding essential Islamic beliefs,
            jurisprudence, and etiquettes.
          </p>
        </div>

        <div className="mt-[52px]">
          <div className="w-full flex lg:flex-row md:flex-row flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
            <div className="w-[80%] lg:w-[33%] lg:w-[33%] md:w-[33%]">
              <TeamCard
                name="Sayeed Abu Huraira Faisal ibn Muhammad Talha Qasmi"
                role="Director and Aalimiyyat Teacher"
                imageUrl="https://cdn.builder.io/api/v1/image/assets/50c5874c86c6485ea2bca5b41e41b4dd/ade842d8c26ff11674880ab709e472d4043667659946c2b4a8232ef7d432d31b?placeholderIfAbsent=true"
              />
            </div>
            <div className="w-[80%] lg:w-[33%] lg:w-[33%] md:w-[33%]">
              <TeamCard
                name="Muhammad Usman bin Maulana Muhammad Umar"
                role="Director and Aalimiyyat Teacher"
                imageUrl="https://cdn.builder.io/api/v1/image/assets/50c5874c86c6485ea2bca5b41e41b4dd/0e68de7f2a23323f99f175acf029976f3baa3dc8352be9fb8fd4deeba310a460?placeholderIfAbsent=true"
              />
            </div>
            <div className="w-[80%] lg:w-[33%] lg:w-[33%] md:w-[33%]">
              <TeamCard
                name="Sayeed Abu Huraira Faisal ibn Muhammad Talha Qasmi"
                role="Director and Aalimiyyat Teacher"
                imageUrl="https://cdn.builder.io/api/v1/image/assets/50c5874c86c6485ea2bca5b41e41b4dd/81c461ea91e95092114c4609ca5224dca64a49d03f2b5810d7b33113dc2c9491?placeholderIfAbsent=true"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const TeamCard = ({ name, role, imageUrl }) => {
  return (
    <article className="grow text-black py-[3px]">
      <img
        src={imageUrl}
        alt={name}
        className="aspect-[1] object-contain w-full"
      />
      <div className="flex flex-col items-stretch mt-[20px] md:mt-[38px] items-center justify-center md:px-[17px]">
        <h3 className="text-[24px] md:text-[32px] font-normal leading-8 md:leading-10 tracking-[0px]">
          {name}
        </h3>
        <p className="text-sm font-medium leading-none tracking-[0.1px] mt-3 md:mt-4">
          {role}
        </p>
      </div>
    </article>
  );
};
