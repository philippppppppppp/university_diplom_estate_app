import { Box, Flex, Text } from "@chakra-ui/react";
import { LoginForm } from "../../features/auth";
import { MinimalHeader } from "../../widgets/header";
import { RedirectLink, useRedirect } from "../../shared/redirect";
import { useTranslation } from "../../shared/translations";

export const LoginPage: React.FC = () => {
  const redirect = useRedirect();
  const { t } = useTranslation();

  return (
    <>
      <Box position="absolute" left="0" right="0" top="0">
        <MinimalHeader />
      </Box>
      <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
        <Flex
          borderWidth="1px"
          borderRadius="md"
          p="4"
          direction="column"
          gap="2"
        >
          <LoginForm onLoginSuccess={redirect} />
          <Text
            textDecor="underline"
            fontSize="14"
            as={RedirectLink}
            to="/register"
            alignSelf="center"
            forward
          >
            {t("register")}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
