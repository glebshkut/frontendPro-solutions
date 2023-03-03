import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';

export const testimonials = [];

function createRandomUser() {
  return {
    rating: faker.datatype.number({ min: 1, max: 5, precision: 1 }),
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    companyName: faker.company.name(),
    avatar: faker.image.avatar(),
    title: faker.lorem.words(2),
    text: faker.lorem.sentences(2),
  };
}

Array.from({ length: 10 }).forEach(() => {
  testimonials.push(createRandomUser());
});
