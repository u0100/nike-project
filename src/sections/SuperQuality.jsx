import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        Мы предоставляем вам
          <span className='text-coral-red'> Оригинальную </span>
          <span className='text-coral-red'>Качественную </span> Обувь
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Наша тщательно изготовленная обувь, обеспечивающая первоклассный комфорт и стиль, предназначена для того, чтобы поднять ваш опыт, предлагая вам непревзойденное качество, инновации и нотку элегантности.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Наша приверженность деталям и совершенству обеспечивает ваше удовлетворение
        </p>
        <div className='mt-11'>
          <Button label='Смотреть детали' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
