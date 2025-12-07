import React from "react";
import Blog from "../components/Blog";
import { BiDownload } from "react-icons/bi";
const info = [
  { name: "Text", info: "Reem" },
  { name: "Date", info: "10.oct.2025" },
  { name: "Read", info: "1 min" },
];

const BlogDetails = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-24 text-white">
      <div className="w-full px-5 lg:w-1/2">
        <h4 className="text-4xl text-second capitalize">
          what does it take to become a web devloper
        </h4>
        <span className="w-full h-px block bg-gray-500 my-10" />
        <div className="flex justify-between mt-7 items-center">
          <div className="flex">
            {info.map((item, index) => (
              <div key={index} className="me-5">
                <span className=" font-semibold text-md">{item.name}:</span>
                <span className="text-gray-300 text-md ms-1">{item.info}</span>
              </div>
            ))}
          </div>
          <BiDownload className="w-10 h-10 bg-second rounded-full p-2 text-third" />
        </div>
        <span className="w-full h-px block bg-gray-500 my-10" />
        <img
          className="w-full h-96 object-cover rounded-lg mb-10"
          src="https://images.unsplash.com/photo-1678227547309-f25998d4fc86?fm=jpg&q=60&w=3000"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid
          atque expedita corporis est itaque quidem molestiae incidunt alias
          sequi magni numquam distinctio ad, tempore soluta hic rerum odit
          maiores? Cumque aliquid sapiente eum debitis aliquam dolorem nobis
          voluptates incidunt praesentium in officiis distinctio consequuntur,
          esse delectus, ratione maiores? Cumque molestiae libero aliquid
          voluptates ipsam officiis ad. Rem, inventore harum. Modi unde incidunt
          rem recusandae repellendus omnis repellat assumenda, alias est ipsum
          quis at, aut reiciendis dignissimos! Autem, corrupti. Deserunt sit,
          dolorem quidem voluptatem dolore amet doloribus commodi voluptates
          nobis! Incidunt voluptate accusantium hic obcaecati dolore atque
          reprehenderit qui! Voluptatem, repellat inventore nisi saepe ratione
          modi temporibus quidem commodi placeat quae, dolorum corrupti totam
          molestias voluptates quos tenetur omnis itaque. Eligendi expedita
          quaerat facere optio, tempore commodi temporibus porro id iusto
          accusantium molestiae! Error perferendis ab alias temporibus?
          Praesentium rem assumenda sed? Dolor voluptates quod optio,
          repudiandae delectus minima magni? Omnis amet quasi et explicabo
          temporibus illo, labore earum architecto nesciunt, voluptas dolor sint
          quis ut. Illo inventore officiis, error quas quidem asperiores dolores
          temporibus repellendus reiciendis fugit sequi placeat. Saepe rerum
          alias voluptas. Enim, accusantium dolorem eius illum hic minima
          repellendus. Officia fugiat vero ducimus eos, ratione dolorum beatae
          sapiente et laudantium, perferendis in dolores harum qui placeat
          nulla! Cum, voluptatibus corporis! Deserunt aut veritatis, neque sit
          et impedit debitis totam numquam asperiores itaque placeat?
          Accusantium velit veniam enim laborum, illo dolorum corporis,
          accusamus, earum necessitatibus pariatur laudantium porro. Hic
          sapiente porro ea sunt accusamus debitis cumque cupiditate! Provident
          quasi maiores iure, odio commodi, dolorum reprehenderit debitis,
          reiciendis deserunt corrupti quis error sunt quae incidunt aspernatur
          itaque deleniti repellendus! Natus illo voluptate magnam eius quisquam
          modi, quasi dicta sed nesciunt officia voluptates dignissimos et
          nostrum tempore, veritatis aliquid nam beatae maxime assumenda?
          Praesentium culpa cum nisi ad labore hic. Tenetur labore nemo vitae
          accusamus voluptatem odio nostrum officia maiores temporibus commodi!
          Cum omnis esse blanditiis, magnam eligendi, veniam dolorem rem autem
          dicta ex possimus voluptates non consectetur nobis. Voluptates.
          Reprehenderit soluta officia voluptatum rerum cum? Expedita deserunt
          dolorum doloremque eaque, labore mollitia error voluptate sapiente
          minima ipsam pariatur tempora ullam fugiat doloribus eveniet
          obcaecati, porro eius at voluptas velit. Expedita possimus eius
          obcaecati officiis nostrum rerum quisquam veritatis quod error?
          Delectus deserunt quas pariatur repellendus earum ratione architecto!
          Odio, repudiandae dolore fugit iste enim sed perspiciatis nam facere
          quam. Voluptatem facilis maiores modi quaerat blanditiis quidem esse
          maxime sapiente ipsa tempora corporis eligendi incidunt, minima,
          voluptatibus non tenetur iure fuga hic. Laboriosam magni atque
          architecto minima nesciunt. Laborum, deserunt? Quos ipsum enim dolor
          tempore, consectetur debitis nam quibusdam consequuntur saepe sed
          voluptatibus reprehenderit pariatur illum rerum illo perspiciatis
          possimus laboriosam hic dolorem fugit minima excepturi earum tenetur?
          Temporibus, in. Eum et itaque iste cupiditate, esse illum neque amet
          debitis, doloremque sed aliquam nisi quod eaque iure possimus est
          fugiat voluptate labore suscipit necessitatibus. Repellat similique
          sequi id voluptatibus deserunt? Aut odio alias quis distinctio vero,
          veniam sequi assumenda ratione obcaecati, totam earum consequatur
          cumque quidem. Eligendi cupiditate quia porro, iure tempore assumenda
          veniam sequi minima laborum, labore ut atque. Nam repellat nesciunt
          nulla doloremque in praesentium, omnis repellendus, numquam, sunt esse
          facilis! Autem necessitatibus eveniet voluptas, ab officia hic eaque
          cumque totam voluptate adipisci in aliquam maiores fugiat eos. Esse
          doloribus modi sunt maxime facilis sint culpa repudiandae quo
          similique delectus in minus dicta harum, fuga ratione reprehenderit
          perspiciatis, hic dolor dolore nesciunt! Maiores accusantium illo
          ducimus a atque. Iste soluta voluptatum cum animi provident id earum
          blanditiis deleniti quae! Quidem modi, earum nihil maxime a eveniet
          mollitia perferendis, soluta vitae eum omnis illo fugiat dolorum
          deserunt quo. Eius! Veritatis enim neque veniam pariatur perspiciatis
          libero? Laboriosam ullam cum inventore maiores praesentium corrupti
          numquam consequuntur. Excepturi magnam nulla illo, ea labore expedita
          error unde saepe, consequuntur corrupti modi neque! Nisi, at eius
          maxime modi esse quo asperiores eligendi quae corporis, ullam ad
          dolores libero obcaecati, quis aut voluptatum? Distinctio obcaecati
          illo sapiente vero quae deleniti aperiam ratione nostrum aspernatur.
          Ratione assumenda blanditiis, fugit delectus distinctio nulla repellat
          quia sed! Dignissimos optio quod obcaecati et ipsam dicta delectus
          rerum maiores cum illum nisi officiis nam, fugiat facilis voluptate,
          ratione deserunt! Fuga modi velit hic tenetur illum ratione eaque
          magni voluptatibus veniam! Assumenda accusamus optio alias dignissimos
          deserunt repellat consequatur dolor, perspiciatis, architecto nulla
          totam corrupti praesentium laudantium distinctio ullam dolore? Maiores
          cupiditate, totam quisquam neque unde sunt iste perferendis asperiores
          voluptate aspernatur minima similique dicta odio dolores! Sunt
          sapiente voluptatem eum expedita quasi provident, minus unde aliquid
          aliquam minima magni? Eligendi officia ab commodi dolorum tempore
          asperiores minus velit. Blanditiis cupiditate odio tempore optio,
          dolorum sint obcaecati magni recusandae voluptatem possimus placeat
          mollitia esse sequi corrupti inventore ex soluta animi? Sint, mollitia
          ex harum modi ea ut! Necessitatibus, rem porro repellat aliquid
          adipisci, qui incidunt doloremque illo, officiis eveniet voluptates
          perferendis nobis. Sed optio et repellendus, consequuntur natus quia
          facere! Itaque accusantium quos magnam, earum aliquam repellat saepe
          nostrum placeat expedita minima aperiam nesciunt sunt voluptas
          mollitia tempore voluptatum obcaecati nam consectetur fugiat possimus.
          Id excepturi aliquam voluptatum nisi? Deleniti. Praesentium, atque,
          provident quasi eligendi aperiam quas numquam voluptates perspiciatis
          dolorum officia aliquid error quae voluptatibus, deleniti corrupti id
          recusandae! Reiciendis quisquam sequi aut architecto labore unde
          doloremque, itaque accusantium. Quas aperiam natus rem porro
          blanditiis accusantium doloremque vitae autem ipsam tempora maxime eum
          quisquam alias provident temporibus aliquam cumque inventore ad
          doloribus quaerat suscipit, molestiae ducimus optio. Necessitatibus,
          repellat!
        </p>
        <span className="w-full h-px block bg-gray-500 my-10" />
        <div className="flex justify-between mt-7 items-center">
          <div className="flex">
            {info.map((item, index) => (
              <div key={index} className="me-5">
                <span className=" font-semibold text-md">{item.name}:</span>
                <span className="text-gray-300 text-md ms-1">{item.info}</span>
              </div>
            ))}
          </div>
          <BiDownload className="w-10 h-10 bg-second rounded-full p-2 text-third" />
        </div>
        <span className="w-full h-px block bg-gray-500 my-10" />
        <div className="flex gap-3 text-center md:gap-5 mt-7 items-center text-sm md:text-xl">
          <span className="bg-gray-700 py-2 px-3 rounded-full">
            web developer
          </span>
          <span className="bg-gray-700 py-2 px-3 rounded-full">
            web developer
          </span>
          <span className="bg-gray-700 py-2 px-3 rounded-full">
            web developer
          </span>
        </div>
        <div className="flex justify-center">
          <button className=" mt-10 text-white border border-second py-2 px-6 rounded-full capitalize">
            subscribe my blogs
          </button>
        </div>
      </div>
      <h1 className="mt-32 text-5xl text-center md:text-7xl capitalize text-second">
        you may also like
      </h1>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default BlogDetails;
