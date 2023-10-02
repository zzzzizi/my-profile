import { PageTitle } from '../component/pageTitle/pageTitle';
import { ContactCard } from '../component/contactCard/contactCard';

export const Contact = () => {
  return (
    <div className="page">
      <PageTitle title="Contact" />
      <ContactCard />
    </div>
  );
};
