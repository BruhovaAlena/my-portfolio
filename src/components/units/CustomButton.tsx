import { Button } from '@chakra-ui/react';

type CustomButtonProps = {
    href: string
    title: string
}

const CustomButton = ({href, title}: CustomButtonProps) => {
  return (
    <Button 
    borderRadius='3xl'
    size="md"
    borderColor='teal.500'        
    variant="solid"
   
    w="fit-content"
    _hover={{
      bgGradient: 'linear(to-l, #AD7BE9,#14b8a6)',
      color:"white"

    }}
  >
    <a href={href} target='_blank' rel="noreferrer">{title}</a>
  </Button>
  )
}

export default CustomButton