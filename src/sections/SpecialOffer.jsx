import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Особое </span>
          Предложение
        </h2>
        <p className='mt-4 info-text'>
        Отправляйтесь в путешествие по магазинам, которое переопределит ваш опыт с непревзойденными предложениями. От первоклассного выбора до невероятной экономии — мы предлагаем непревзойденную ценность, которая отличает нас от других.
        </p>
        <p className='mt-6 info-text'>
        Откройте для себя мир возможностей, предназначенных для исполнения ваших уникальных желаний, превосходящих самые высокие ожидания. Ваше путешествие с нами будет не чем иным, как исключительным.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Купить сейчас' iconURL={arrowRight} />
          <Button
            label='Узнать больше'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
