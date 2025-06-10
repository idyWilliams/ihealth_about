import React, { useState } from "react";
import { ScrollView, Modal, TouchableOpacity } from "react-native";
import { Box, Image, Text } from "@/components/Restyle";
import Pressable from "@/components/Restyle/Pressable";
import Icon from "@/assets/icons/Icon";
import theme from "@/constants/Colors";
import {
  aboutSections,
  revenueStreams,
  teamMembers,
  termsText,
  trustedBy,
} from "@/constants/mockData";
import TermsModal from "@/components/TermsModal";

const AboutPage = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <Box height="100%" backgroundColor="white">

      {/* <Box
        flexDirection="row"
        alignItems="center"
        px="md"
        py="sm"
        bg="white"
        borderBottomWidth={0.5}
        borderColor="greyBorder"
      >
        <Pressable>
          <Icon name="arrowLeft" size={24} color="primary" />
        </Pressable>
        <Box flex={1} alignItems="center">
          <Text variant="header" color="primary">
            About Us
          </Text>
        </Box>
        <Box width={24} />
      </Box> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          flexDirection="row"
          alignItems="center"
          px="md"
          py="sm"
          bg="white"
          borderBottomWidth={0.5}
          borderColor="greyBorder"
        >
          <Pressable>
            <Icon name="arrowLeft" size={24} color="primary" />
          </Pressable>
          <Box flex={1} alignItems="center">
            <Text variant="header" color="primary">
              About Us
            </Text>
          </Box>
          <Box width={24} />
        </Box>
        <Box px="md" py="lg">

          <Box alignItems="center" mb="lg">
            {/* <Image
              source={{
                uri: "/assets/images/adaptive-icon.png",
              }}
              width={80}
              height={80}
              borderRadius={20}
              resizeMode="contain"
            /> */}
            <Image
              source={require("@/assets/images/adaptive-icon.png")}
              width={80}
              height={80}
              borderRadius={20}
              resizeMode="contain"
            />
            <Text
              variant="header"
              color="primary"
              mt="sm"
              textAlign="center"
              fontWeight="700"
            >
              iHealth and Wellness Foundation, Inc.
            </Text>
          </Box>


          <Box alignItems="center" mb="lg">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              }}
              width="100%"
              height={160}
              borderRadius={16}
              resizeMode="cover"
            />
          </Box>


          <Box mb="lg">
            <Text variant="medium14" color="black" textAlign="center">
              iHealthWellness connects patients with complex diseases to
              high-quality medical and wellness providers and resources through
              an integrated platform, empowering patients to take charge of
              their health while fostering collaboration among all stakeholders
              to improve healthcare outcomes.
            </Text>
          </Box>

          
          {aboutSections.map((section) => (
            <Box
              key={section.title}
              flexDirection="row"
              alignItems="flex-start"
              mb="lg"
              bg="greyBorder"
              borderRadius={10}
              p="md"
              gap="md"
            >
              <Box
                bg="primary"
                width={40}
                height={40}
                borderRadius={20}
                alignItems="center"
                justifyContent="center"
                mt="xs"
              >
                <Icon name={section.icon as any} size={22} color="white" />
              </Box>
              <Box flex={1}>
                <Text
                  variant="medium14"
                  color="primary"
                  fontWeight="700"
                  mb="xs"
                >
                  {section.title}
                </Text>
                <Text variant="body" color="black">
                  {section.description}
                </Text>
              </Box>
            </Box>
          ))}
          <Box alignItems="center" mb="lg">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              }}
              width="100%"
              height={160}
              borderRadius={16}
              resizeMode="cover"
            />
          </Box>

          <Box mb="lg">
            <Text variant="medium14" color="primary" fontWeight="700" mb="sm">
              Revenue Generation
            </Text>
            <Box flexDirection="row" flexWrap="wrap" gap="sm">
              {revenueStreams.map((stream) => (
                <Box
                  key={stream}
                  bg="greyBorder"
                  borderRadius={6}
                  px="md"
                  py="xs"
                  mb="xs"
                  mr="sm"
                  flexDirection="row"
                  alignItems="center"
                  gap="xs"
                >
                  <Icon name="check" size={16} color="primary" />
                  <Text variant="medium12" color="black">
                    {stream}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          <Box mb="lg">
            <Text variant="medium14" color="primary" fontWeight="700" mb="sm">
              Meet Our Team
            </Text>
            <Box
              flexDirection="row"
              flexWrap="wrap"
              gap="md"
              justifyContent="space-between"
            >
              {teamMembers.map((member) => (
                <Box
                  key={member.name}
                  width="47%"
                  bg="white"
                  borderRadius={12}
                  alignItems="center"
                  mb="md"
                  shadowOpacity={0.07}
                  shadowRadius={8}
                  shadowColor="black"
                  shadowOffset={{ width: 0, height: 2 }}
                  p="md"
                >
                  <Image
                    source={{ uri: member.image }}
                    width={72}
                    height={72}
                    borderRadius={36}
                    mb="sm"
                  />
                  <Text
                    variant="medium14"
                    color="black"
                    fontWeight="700"
                    textAlign="center"
                  >
                    {member.name}
                  </Text>
                  <Text
                    variant="medium12"
                    color="textTint"
                    textAlign="center"
                    mb="xs"
                  >
                    {member.role}
                  </Text>
                  <Box flexDirection="row" gap="sm">
                    {member.socials.linkedin && (
                      <Pressable onPress={() => {}}>
                        <Icon name="linkedin" size={18} color="primary" />
                      </Pressable>
                    )}
                    {member.socials.twitter && (
                      <Pressable onPress={() => {}}>
                        <Icon name="twitter" size={18} color="primary" />
                      </Pressable>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box mb="lg">
            <Text variant="medium14" color="primary" fontWeight="700" mb="sm">
              Trusted By
            </Text>
            <Box
              flexDirection="row"
              gap="md"
              justifyContent="space-between"
              alignItems="center"
            >
              {trustedBy.map((brand) => (
                <Box key={brand.name} alignItems="center" width={80}>
                  <Image
                    source={{ uri: brand.logo }}
                    width={56}
                    height={56}
                    borderRadius={14}
                    mb="xs"
                    resizeMode="contain"
                  />
                  <Text variant="medium12" color="textTint" textAlign="center">
                    {brand.name}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          <Box alignItems="center" mt="xl" mb="lg">
            <Pressable
              backgroundColor="primary"
              borderRadius={8}
              px="lg"
              py="md"
              alignItems="center"
              justifyContent="center"
              onPress={() => setShowTerms(true)}
            >
              <Text color="white" variant="medium14">
                View Terms of Use
              </Text>
            </Pressable>
          </Box>
        </Box>

        <TermsModal
          visible={showTerms}
          onClose={() => setShowTerms(false)}
          termsText={termsText}
        />
      </ScrollView>
    </Box>
  );
};

export default AboutPage;
