import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import siteConfig from '@generated/docusaurus.config';

export default function GiscusComponent() {
    const { colorMode } = useColorMode();
    const { github_repo, github_repoId, github_categoryId }: any = siteConfig.customFields;
    return (
        <Giscus
            repo={github_repo}
            repoId={github_repoId}
            category="General"
            categoryId={github_categoryId}
            mapping="pathname"
            term="Leave a Comment"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="vi"
            loading="lazy"
        />
    );
}