<?php
declare(strict_types=1);
namespace In2code\Realurlconflicts\Utility;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Object\ObjectManager;
use TYPO3\CMS\Extbase\Object\ObjectManagerInterface;

/**
 * Class ObjectUtility
 */
class ObjectUtility
{

    /**
     * @return ObjectManagerInterface
     */
    public static function getObjectManager(): ObjectManagerInterface
    {
        return GeneralUtility::makeInstance(ObjectManager::class);
    }
}
